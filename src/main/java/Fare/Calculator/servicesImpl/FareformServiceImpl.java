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

        // Save input data first
        Fareform addData = cabfareRepo.save(fareform);

        Long km = addData.getTotalKm();
        Long passengers = addData.getTotalPassenger();
        String cabType = addData.getCabType();

        // Step 1: Determine rate based on cab type
        Long ratePerKm = 0L;

        switch (cabType) {
            case "Mini":
                ratePerKm = 13L;
                break;
            case "Sedan":
                ratePerKm = 15L;
                break;
            case "SUV":
                ratePerKm = 18L;
                break;
            default:
                ratePerKm = 10L; // default
        }

        // Step 2: Calculate fare
        Long baseFare = 40L;  // fixed charge
        Long totalFare = baseFare + (km * ratePerKm);
        Long sharedFare = totalFare / passengers;

        // Step 3: Create response object
        Fareform response = new Fareform();

        response.setId(addData.getId());
        response.setCabType(cabType);
        response.setTotalKm(km);
        response.setTotalPassenger(passengers);
        response.setTotalFare(totalFare);
        response.setSharedFare(sharedFare);

        return response;
    }

}
