package com.moneymanagementsystem.assignment.creditManagement;

import com.moneymanagementsystem.assignment.Debit;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CreditRepository extends JpaRepository<Credit,Integer> {
//    Credit findById(int id);

}
