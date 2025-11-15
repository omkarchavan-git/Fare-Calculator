package Fare.Calculator.repository;

import Fare.Calculator.entity.Fareform;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CabfareRepo extends JpaRepository<Fareform, Long > {

}
