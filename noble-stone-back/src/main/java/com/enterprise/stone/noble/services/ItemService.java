package com.enterprise.stone.noble.services;

import java.util.Iterator;
import java.util.Optional;

import org.hibernate.mapping.List;
import org.springframework.stereotype.Service;

import com.enterprise.stone.noble.entities.Item;
import com.enterprise.stone.noble.repository.ItemRepo;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ItemService {

    private final ItemRepo itemRepo;

    public Item saveItem(Item item) {
        return itemRepo.save(item);
    }

    public java.util.List<Item> getAllItem() {
        return itemRepo.findAll();
    }

    public void removeItem(Long id) {
        itemRepo.deleteById(id);
    }

    public Item updateItem(Item item) {
        return itemRepo.save(item);
    }

}
