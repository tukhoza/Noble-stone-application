package com.enterprise.stone.noble.entities;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Item {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "_id")
    private Long Id;
    @Column(name = "item_name")
    private String itemName;
    @Column(name = "item_category")
    private String itemCategory;
    @Column(name = "item_sub_category")
    private String itemSubCategory;
    @Column(name = "item_price")
    private String itemPrice;
    @Column(name = "item_description")
    private String itemDescription;
    @ElementCollection
    @CollectionTable(name = "item_list", joinColumns = @JoinColumn(name = "item_id"))
    @Column(name = "item")
    private List<String> itemList;

    @ManyToMany(mappedBy = "items", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<Quote> quotes;
}
