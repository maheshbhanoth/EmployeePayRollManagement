package com.employee_payroll.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.employee_payroll.entities.Schedule_work;

public interface Schedule_workRepo extends JpaRepository<Schedule_work, Integer>{

	List<Schedule_work> findAllByEmployeeId(int employeeId);
	
}
