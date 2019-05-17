package com.musicfeels.MusicFeels;

import com.musicfeels.MusicFeels.repository.ChordProgressionRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class MusicFeelsApplication {

  public static void main(String[] args) {
    SpringApplication.run(MusicFeelsApplication.class, args);
  }

}
