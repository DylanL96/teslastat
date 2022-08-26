package ca.sheridancollege.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ca.sheridancollege.backend.Model.Analyst;

@Repository
public interface AnalystRepository extends JpaRepository<Analyst, Long> {
  
}
