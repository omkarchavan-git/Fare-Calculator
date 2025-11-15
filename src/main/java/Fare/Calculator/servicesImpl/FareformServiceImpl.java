package Fare.Calculator.servicesImpl;

import Fare.Calculator.entity.Fareform;
import Fare.Calculator.repository.CabfareRepo;
import Fare.Calculator.services.FareformService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FareformServiceImpl implements FareformService {

    @Autowired
    private CabfareRepo cabfareRepo;

    @Override
    public Fareform saveData(Fareform fareform) {
        Fareform addData = cabfareRepo.save(fareform);
        return addData;
    }
}
