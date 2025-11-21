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
        Long totalFare = 40 + (addData.getTotalKm() * 3);
        Long sharedFare = totalFare / addData.getTotalPassenger();

        //to save and save all data at once
        Fareform response = new Fareform();

        response.setId(addData.getId());
        response.setTotalFare(addData.getTotalFare());
        response.setSharedFare(addData.getSharedFare());
        response.setSharedFare(sharedFare);
        response.setTotalFare(totalFare);
        return response;
    }
}
