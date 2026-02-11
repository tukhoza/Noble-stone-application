package com.enterprise.stone.noble.controller;

import java.sql.Date;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.enterprise.stone.noble.controller.helpers.request.ItemRequest;
import com.enterprise.stone.noble.controller.helpers.request.QuoteRequest;
import com.enterprise.stone.noble.controller.helpers.response.ItemResponse;
import com.enterprise.stone.noble.controller.helpers.response.PhotoResponse;
import com.enterprise.stone.noble.controller.helpers.response.QuoteResponse;
import com.enterprise.stone.noble.entities.Item;
import com.enterprise.stone.noble.entities.Quote;
import com.enterprise.stone.noble.services.QuoteService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/quotes")
@RequiredArgsConstructor
public class QuoteController {

    private final QuoteService quoteService;

    @PostMapping("/savequote")
    public ResponseEntity<QuoteResponse> saveQuote(@RequestBody QuoteRequest quoteReques) {

        var savedquote = quoteService.saveQuote(quoteReques);
        var quoteRes = QuoteResponse.builder()
                .Id(savedquote.getId())
                .build();

        return new ResponseEntity<>(quoteRes, HttpStatus.CREATED);
    }

    @PostMapping("/removequote")
    public ResponseEntity<String> removeQuote(@RequestBody QuoteRequest quoteRequest) {
        quoteService.removeQuote(quoteRequest.getId());
        return new ResponseEntity<>("Deleted", HttpStatus.OK);
    }

    @GetMapping("/getallquotes")
    public ResponseEntity<List<QuoteResponse>> getAllQuotes() {
        List<QuoteResponse> listQuote = new ArrayList<>();
        var quotes = quoteService.getAllQuote();

        if (quotes != null) {
            for (Quote quote : quotes) {
                List<ItemResponse> listItem = new ArrayList<>();
                if (quote.getItems() != null) {
                    for (Item item : quote.getItems()) {
                        var itemRes = ItemResponse.builder()
                                .Id(item.getId())
                                .itemName(item.getItemName())
                                .itemDescription(item.getItemDescription())
                                .itemPrice(item.getItemPrice())
                                .itemList(item.getItemList())
                                .build();
                        listItem.add(itemRes);
                    }
                }
                var quoteRes = QuoteResponse.builder().Id(quote.getId())
                        .action(quote.isAction())
                        .date(quote.getDate())
                        .email(quote.getEmail())
                        .message(quote.getMessage())
                        .name(quote.getName())
                        .phone(quote.getPhone())
                        .surname(quote.getSurname())
                        .items(listItem)
                        .build();
                listQuote.add(quoteRes);

            }
        }
        return new ResponseEntity<>(listQuote, HttpStatus.OK);
    }

    // @PostMapping("/removequote")
    public ResponseEntity<QuoteResponse> updateQuote(QuoteRequest quoteRequest) {
        // Todo

        return new ResponseEntity<>(null, HttpStatus.OK);
    }

}
