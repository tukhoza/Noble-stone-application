package com.enterprise.stone.noble.controller;

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
import com.enterprise.stone.noble.controller.helpers.response.ItemResponse;
import com.enterprise.stone.noble.entities.Item;
import com.enterprise.stone.noble.services.ItemService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/items")
@RequiredArgsConstructor
public class ItemController {

    private final ItemService itemService;

    @GetMapping("/getallitems")
    public ResponseEntity<List<ItemResponse>> getAllItems() {
        List<ItemResponse> listItems = new ArrayList<ItemResponse>();
        var allItems = itemService.getAllItem();
        for (Item item : allItems) {
            var itemRes = ItemResponse.builder()
                    .Id(item.getId())
                    .itemCategory(item.getItemCategory())
                    .itemDescription(item.getItemDescription())
                    .itemList(item.getItemList())
                    .itemName(item.getItemName())
                    .itemPrice(item.getItemPrice())
                    .itemSubCategory(item.getItemSubCategory())
                    .build();
            listItems.add(itemRes);
        }

        return new ResponseEntity<>(listItems, HttpStatus.OK);
    }

    @PostMapping("/saveitem")
    public ResponseEntity<ItemResponse> saveItem(@RequestBody ItemRequest itemRequest) {
        var item = Item.builder()
                .Id(itemRequest.getId())
                .itemCategory(itemRequest.getItemCategory())
                .itemDescription(itemRequest.getItemDescription())
                .itemList(itemRequest.getItemList())
                .itemName(itemRequest.getItemName())
                .itemPrice(itemRequest.getItemPrice())
                .itemSubCategory(itemRequest.getItemSubCategory())
                .build();
        var savedItem = itemService.saveItem(item);

        var itemRes = ItemResponse.builder().Id(savedItem.getId()).build();

        return new ResponseEntity<>(itemRes, HttpStatus.CREATED);
    }

    @PostMapping("/saveallitem")
    public ResponseEntity<String> saveallItem(@RequestBody List<ItemRequest> itemsRequest) {

        for (ItemRequest itemRequest : itemsRequest) {
            var item = Item.builder()
                    .itemCategory(itemRequest.getItemCategory())
                    .itemDescription(itemRequest.getItemDescription())
                    .itemList(itemRequest.getItemList())
                    .itemName(itemRequest.getItemName())
                    .itemPrice(itemRequest.getItemPrice())
                    .itemSubCategory(itemRequest.getItemSubCategory())
                    .build();
            itemService.saveItem(item);
        }
        return new ResponseEntity<>("Successful", HttpStatus.CREATED);
    }

    @PostMapping("/removeitem")
    public ResponseEntity<HttpStatus> removedItem(@RequestBody ItemRequest itemRequest) {
        itemService.removeItem(itemRequest.getId());
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
