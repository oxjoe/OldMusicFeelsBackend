package com.musicfeels.MusicFeels.controller;

import com.musicfeels.MusicFeels.model.ChordProgression;
import com.musicfeels.MusicFeels.repository.ChordProgressionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;


@org.springframework.stereotype.Controller
@CrossOrigin(origins = "localhost:4200", maxAge = 3600)
@RequestMapping("/")
public class Controller {

  @Autowired
  private ChordProgressionRepository chordProgressionRepository;

  @GetMapping(path = "/add")
  public @ResponseBody
  String addNewChord(@RequestParam String numbers, @RequestParam String names, @RequestParam String notes) {
    ChordProgression cp = new ChordProgression();
    cp.setNumbers(numbers);
    cp.setNames(names);
    cp.setNotes(notes);

    chordProgressionRepository.save(cp);
    return "Saved";
  }

  @GetMapping(path = "/show")
  public String getAllChordProgressions(Model model) {
    model.addAttribute("modelCp", chordProgressionRepository.findAll());
    return "show";
  }

  // Returns JSON data
  @GetMapping(path = "/data")
  public @ResponseBody
  Iterable<ChordProgression> getAllChordProgressions() {
    return chordProgressionRepository.findAll();
  }

}
