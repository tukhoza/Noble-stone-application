package com.enterprise.stone.noble.services;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

import com.enterprise.stone.noble.controller.helpers.request.QuoteRequest;
import com.enterprise.stone.noble.controller.helpers.response.ItemResponse;
import com.enterprise.stone.noble.email.EmailSender;
import com.enterprise.stone.noble.entities.Item;
import com.enterprise.stone.noble.entities.Quote;
import com.enterprise.stone.noble.repository.ItemRepo;
import com.enterprise.stone.noble.repository.QuoteRepo;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class QuoteService {

    private final QuoteRepo quoteRepo;
    private final ItemRepo itemRepo;
    private final EmailSender emailSender;

    public Quote saveQuote(QuoteRequest quoteReques) {

        List<Long> listItemsReq = new ArrayList<>();

        for (ItemResponse itemResponse : quoteReques.getItems()) {
            listItemsReq.add(itemResponse.getId());
        }

        List<Item> items = itemRepo.findAllById(listItemsReq);

        var quote = Quote.builder().Id(quoteReques.getId())
                .action(quoteReques.isAction())
                .date(new Date())
                .email(quoteReques.getEmail())
                .message(quoteReques.getMessage())
                .name(quoteReques.getName())
                .phone(quoteReques.getPhone())
                .surname(quoteReques.getSurname())
                .items(items)
                .build();

        var savedQuote = quoteRepo.save(quote);

        emailSender.send(savedQuote.getEmail(), savedQuote.getName());

        return savedQuote;
    }

    public void removeQuote(Long id) {
        quoteRepo.deleteById(id);
    }

    public Quote updateQuote(Quote quote) {
        return quoteRepo.save(quote);
    }

    public List<Quote> getAllQuote() {
        return quoteRepo.findAll();
    }
}
