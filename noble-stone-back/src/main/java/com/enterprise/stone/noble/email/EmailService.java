package com.enterprise.stone.noble.email;

import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Map;

import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.springframework.ui.freemarker.FreeMarkerTemplateUtils;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.AllArgsConstructor;

import freemarker.template.Configuration;
import freemarker.template.Template;
import freemarker.template.TemplateException;

@Service
@AllArgsConstructor
public class EmailService implements EmailSender {

    private final JavaMailSender mailSender;
    private final Configuration config;

    @Override
    @Async
    public void send(String toEmail, String name) {

        try {

            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, MimeMessageHelper.MULTIPART_MODE_MIXED_RELATED,
                    StandardCharsets.UTF_8.name());
            Template t = config.getTemplate("emailtemplate.ftl");
            Map<String, Object> model = new HashMap<>();
            model.put("name", name);

            String html = FreeMarkerTemplateUtils.processTemplateIntoString(t, model);

            helper.setText(html, true);
            helper.setTo(toEmail);
            helper.setSubject("Service Quotation Request");
            helper.setFrom("infor@noblestoneenterprise.co.za");
            mailSender.send(message);

        } catch (Exception e) {
            System.out.println(e);
        }
    }

}
