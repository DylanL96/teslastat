package ca.sheridancollege.backend.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ca.sheridancollege.backend.Model.Analyst;
import ca.sheridancollege.backend.Service.AnalystService;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "http://localhost:3000")
public class MainController {
  
  @Autowired
  private AnalystService analystService;

  @GetMapping("/getAll")
  public List<Analyst> getAllAnalysts(){
    return analystService.getAllAnalysts();
  }

  @PostMapping("/add")
  public String addAnalyst(@RequestBody Analyst analyst){
    analystService.saveAnalyst(analyst);
    return "New employee is added";
  }

  @DeleteMapping("/delete/{id}")
  public String deleteAnalyst(@PathVariable Long id){
    analystService.deleteAnalyst(id);
    return "Deleted employee";
  }

  @PutMapping("/edit/{id}")
  public String updateAnalyst(@PathVariable Long id, @RequestBody Analyst analystDetails){
    analystService.updateAnalyst(analystDetails, id);
    return "Updated Employee";
  }

  
}
