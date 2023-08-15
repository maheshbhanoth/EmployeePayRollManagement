package com.employee_payroll.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.employee_payroll.entities.Credentials;

public interface CredentialsRepo extends JpaRepository<Credentials, Integer>{
	
	Optional<Credentials> findByEmployeeId(int employeeId);
	
}
