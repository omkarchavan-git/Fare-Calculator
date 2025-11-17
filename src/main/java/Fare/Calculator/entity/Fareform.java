package Fare.Calculator.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;

@Entity
@Getter
@Setter
@Data
public class Fareform {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String cabType;
    private long totalKm;
    private  long totalPassenger;
    private long sharedFare;
    private long totalFare;




    @Column(name = "created_date") //auto generated date
    private LocalDate createdDate = LocalDate.now();

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

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

    public long getSharedFare() {
        return sharedFare;
    }

    public void setSharedFare(long sharedFare) {
        this.sharedFare = sharedFare;
    }

    public long getTotalFare() {
        return totalFare;
    }

    public void setTotalFare(long totalFare) {
        this.totalFare = totalFare;
    }

    public void setCreatedDate(LocalDate createdDate) {
        this.createdDate = createdDate;
    }
}
