package com.musicfeels.MusicFeels;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;


//@org.springframework.stereotype.Controller
//@RequestMapping(path = "/demo")
@org.springframework.stereotype.Controller
public class Controller {

  @Autowired
  private IChordProgression chordProgression;

  @GetMapping("/showChordProgressions")
  public String findChords(Model model) {
    model.addAttribute("Model added Chord", chordProgression.findAll());
    return "showChordProgressions";

  }

//  @GetMapping(path = "/add")
//  public @ResponseBody
//  String addNewChord(@RequestParam String numbers, @RequestParam String names, @RequestParam String notes) {
//    ChordProgression cp = new ChordProgression();
//    cp.setNumbers(numbers);
//    cp.setNames(names);
//    cp.setNotes(notes);
//
//    chordProgressionRepository.save(cp);
//    return "Saved";
//  }

//  @GetMapping(path = "/showChords")
//  public @ResponseBody
//  Iterable<ChordProgression> getAllChordProgressions() {
//    return chordProgressionRepository.findAll();
//  }

}
