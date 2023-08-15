package com.employee_payroll.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.employee_payroll.entities.Employee;

public interface EmployeeRepo extends JpaRepository<Employee, Integer>{
	
}
