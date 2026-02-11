package com.enterprise.stone.noble.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@RequestMapping("/ui")
public class FrontendController {

    @GetMapping("/**")
    public String frontend() {
        return "forward:/index.html";
    }
}
