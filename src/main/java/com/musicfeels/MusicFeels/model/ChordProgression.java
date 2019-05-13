package com.musicfeels.MusicFeels.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "ChordProgression")
public class ChordProgression {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Integer id;
  private String numbers;
  private String names;
  private String notes;

  public ChordProgression(String numbers, String names, String notes) {
    this.numbers = numbers;
    this.names = names;
    this.notes = notes;
  }

  protected ChordProgression() {
  }

  public Integer getId() {
    return id;
  }

  public String getNumbers() {
    return numbers;
  }

  public void setNumbers(String numbers) {
    this.numbers = numbers;
  }

  public String getNames() {
    return names;
  }

  public void setNames(String names) {
    this.names = names;
  }

  public String getNotes() {
    return notes;
  }

  public void setNotes(String notes) {
    this.notes = notes;
  }

  @Override
  public String toString() {
    return String.format(
            "ChordProgression[id=%d, numbers='%s', names='%s', notes='%s']",
            id, numbers, names, notes);
  }
}
