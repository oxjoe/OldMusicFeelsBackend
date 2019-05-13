package com.musicfeels.MusicFeels.repository;

import com.musicfeels.MusicFeels.model.ChordProgression;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ChordProgressionRepository extends CrudRepository<ChordProgression, Integer> {


//  Do the above in ChordProgressionService?
}
