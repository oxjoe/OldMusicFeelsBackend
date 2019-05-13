package com.musicfeels.MusicFeels;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChordProgressionService implements IChordProgression{

  @Autowired
  private ChordProgressionRepository repo;

  @Override
  public List<ChordProgression> findAll() {
    return (List<ChordProgression>) repo.findAll();
  }
}
