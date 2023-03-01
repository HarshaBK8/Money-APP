package com.moneymanagementsystem.assignment;

import org.springframework.data.jpa.repository.JpaRepository;

public interface DebitRepository extends JpaRepository<Debit,Integer> {
    Debit findById(int id);
}
