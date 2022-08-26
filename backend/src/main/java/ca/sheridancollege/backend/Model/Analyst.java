package ca.sheridancollege.backend.Model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "analysts")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Analyst {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  private String firm;
  private String fullName;
  private double priceTarget;
  private String position;
  private String twitterHandle;

}
