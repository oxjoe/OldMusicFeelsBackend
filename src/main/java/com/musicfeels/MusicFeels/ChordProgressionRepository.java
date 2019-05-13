package com.musicfeels.MusicFeels;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ChordProgressionRepository extends CrudRepository<ChordProgression, Integer> {


//  Do the above in ChordProgressionService?
}
