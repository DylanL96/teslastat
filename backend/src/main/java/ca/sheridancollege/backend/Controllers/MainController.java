package ca.sheridancollege.backend.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ca.sheridancollege.backend.Model.Analyst;
import ca.sheridancollege.backend.Service.AnalystService;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin("*")
public class MainController {
  
  @Autowired
  private AnalystService analystService;

  @GetMapping("/")
  public List<Analyst> getAllAnalysts(){
    return analystService.getAllAnalysts();
  }
}
