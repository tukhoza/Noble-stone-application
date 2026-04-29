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

import com.enterprise.stone.noble.controller.helpers.request.MultipartFilePhoto;
import com.enterprise.stone.noble.controller.helpers.request.PhotoRequest;
import com.enterprise.stone.noble.controller.helpers.response.PhotoResponse;
import com.enterprise.stone.noble.entities.Photo;
import com.enterprise.stone.noble.services.PhotoService;

import io.jsonwebtoken.io.IOException;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/photos")
@RequiredArgsConstructor
public class PhotoController {

    public final PhotoService photoService;

    @PostMapping("/savephoto")
    public ResponseEntity<PhotoResponse> savePhoto(@RequestBody MultipartFilePhoto multipart)
            throws IOException, java.io.IOException {

        photoService.savePhoto(multipart);

        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PostMapping("/removephoto")
    public ResponseEntity<PhotoResponse> removePhoto(@RequestBody PhotoRequest photoRequest) {
        photoService.removePhoto(photoRequest.getId());
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/getallphotos")
    public ResponseEntity<List<PhotoResponse>> getAllPhotos() {
        List<PhotoResponse> ListPhotos = new ArrayList<>();
        var allphotos = photoService.getAllPhotos();
        for (Photo photo : allphotos) {
            var photos = PhotoResponse.builder()
                    .Id(photo.getId())
                    .category(photo.getCategory())
                    .name(photo.getName())
                    .type(photo.getType())
                    .imageData(photo.getImageData())
                    .build();
            ListPhotos.add(photos);
        }

        return new ResponseEntity<>(ListPhotos, HttpStatus.OK);
    }
}
