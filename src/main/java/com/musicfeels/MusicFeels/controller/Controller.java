package com.musicfeels.MusicFeels.controller;

import com.musicfeels.MusicFeels.model.ChordProgression;
import com.musicfeels.MusicFeels.repository.ChordProgressionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;


@org.springframework.stereotype.Controller
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/")
public class Controller {

  @Autowired
  private ChordProgressionRepository chordProgressionRepository;
  @GetMapping(path = "/show")
  public String getAllChordProgressions(Model model) {
    model.addAttribute("modelCp", chordProgressionRepository.findAll());
    return "show";
  }

  // Returns JSON data
  @GetMapping(path = "/data")
  @ResponseBody
  public Iterable<ChordProgression> getAllChordProgressions() {
    return chordProgressionRepository.findAll();
  }

}
