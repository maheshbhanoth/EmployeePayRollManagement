package com.employee_payroll.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.employee_payroll.entities.Leaves;

public interface LeavesRepo extends JpaRepository<Leaves, Integer>{
	
	List<Leaves> findAllByEmployeeId(int employeeId);
	
}
