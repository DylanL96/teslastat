package ca.sheridancollege.backend.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ca.sheridancollege.backend.Model.Analyst;
import ca.sheridancollege.backend.Repository.AnalystRepository;

@Service
public class AnalystServiceImpl implements AnalystService {

  @Autowired
  private AnalystRepository analystRepository;

  @Override
  public List<Analyst> getAllAnalysts() {
    return analystRepository.findAll();
  }

  @Override
  public Analyst saveAnalyst(Analyst analyst) {
   return analystRepository.save(analyst);
  }

  @Override
  public void deleteAnalyst(Long id) {
    analystRepository.deleteById(id);
    
  }

  @Override
  public Analyst updateAnalyst(Analyst analyst, Long id) {
    Analyst specificAnalyst = analystRepository.findById(id).get();
    specificAnalyst.setFullName(analyst.getFullName());
    specificAnalyst.setFirm(analyst.getFirm());
    specificAnalyst.setPosition(analyst.getPosition());
    specificAnalyst.setPriceTarget(analyst.getPriceTarget());
    // specificAnalyst.setTwitterHandle(analyst.getTwitterHandle());
    return analystRepository.save(specificAnalyst);
  }
  
}
