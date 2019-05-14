package com.musicfeels.MusicFeels.controller;

import com.musicfeels.MusicFeels.model.ChordProgression;
import com.musicfeels.MusicFeels.repository.ChordProgressionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;


@org.springframework.stereotype.Controller
public class Controller {

  @Autowired
  private ChordProgressionRepository chordProgressionRepository;

//  @GetMapping("/showChordProgressions")
//  public String findChords(Model model) {
//    model.addAttribute("Model added Chord", chordProgression.findAll());
//    return "showChordProgressions";
//
//  }

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
  public @ResponseBody
  Iterable<ChordProgression> getAllChordProgressions() {
    return chordProgressionRepository.findAll();
  }

}
