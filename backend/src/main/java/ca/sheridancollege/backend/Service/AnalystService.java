package ca.sheridancollege.backend.Service;

import java.util.List;

import ca.sheridancollege.backend.Model.Analyst;

public interface AnalystService {
  public List<Analyst> getAllAnalysts();
  public Analyst saveAnalyst(Analyst analyst);
  public void deleteAnalyst(Long id);
  public Analyst updateAnalyst(Analyst analyst, Long id);
  
}
