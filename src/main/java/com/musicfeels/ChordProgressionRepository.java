package com.musicfeels;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ChordProgressionRepository extends CrudRepository<ChordProgression, Integer> {

  List<ChordProgression> findByNumbers(String numbers);
}
