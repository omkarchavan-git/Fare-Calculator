package Fare.Calculator.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;

@Entity
@Getter
@Setter
public class Fareform {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String cabType;
    private long totalKm;
    private  long totalPassenger;


    @Column(name = "created_date") //auto generated date
    private LocalDate createdDate = LocalDate.now();


    public String getCabType() {
        return cabType;
    }

    public void setCabType(String cabType) {
        this.cabType = cabType;
    }

    public long getTotalKm() {
        return totalKm;
    }

    public void setTotalKm(long totalKm) {
        this.totalKm = totalKm;
    }

    public long getTotalPassenger() {
        return totalPassenger;
    }

    public void setTotalPassenger(long totalPassenger) {
        this.totalPassenger = totalPassenger;
    }

    public LocalDate getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(LocalDate createdDate) {
        this.createdDate = createdDate;
    }
}
