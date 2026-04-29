package com.enterprise.stone.noble.services;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.enterprise.stone.noble.controller.helpers.request.MultipartFilePhoto;
import com.enterprise.stone.noble.entities.Photo;
import com.enterprise.stone.noble.repository.PhotoRepo;
import com.enterprise.stone.noble.util.PhotoUtils;

import io.jsonwebtoken.io.IOException;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PhotoService {

    private final PhotoRepo photoRepo;

    public String savePhoto(MultipartFilePhoto multipart) throws IOException, java.io.IOException {

        Photo imageData = photoRepo.save(Photo.builder()
                .name(multipart.getFile().getOriginalFilename())
                .type(multipart.getFile().getContentType())
                .category(multipart.getCategory())
                .imageData(PhotoUtils.compressImage(multipart.getFile().getBytes())).build());
        if (imageData != null) {
            return "file uploaded successfully : " + multipart.getFile().getOriginalFilename();
        }
        return null;
    }

    public List<Photo> getAllPhotos() {
        return photoRepo.findAll();
    }

    public void removePhoto(Long id) {
        photoRepo.deleteById(id);
    }
}
