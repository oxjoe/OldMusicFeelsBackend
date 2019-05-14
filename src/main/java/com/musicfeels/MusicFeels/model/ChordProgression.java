package com.musicfeels.MusicFeels.model;

import lombok.AccessLevel;
import lombok.Data;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

//https://www.baeldung.com/intro-to-project-lombok

@Entity
@Table(name = "chordprogression")
@Data
public class ChordProgression {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  @Setter(AccessLevel.PROTECTED)
  private Long id;
  private String numbers;
  private String names;
  private String notes;

  @Override
  public String toString() {
    return String.format(
            "ChordProgression[id=%d, numbers='%s', names='%s', notes='%s']",
            id, numbers, names, notes);
  }
}
