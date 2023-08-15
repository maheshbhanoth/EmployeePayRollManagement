package com.employee_payroll.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.employee_payroll.entities.Salary;


@Repository
public interface SalaryRepository extends JpaRepository<Salary, Integer>{
   List<Salary> findByEmployee_Id(int employeeId);
}
