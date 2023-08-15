package com.employee_payroll.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.employee_payroll.entities.Attendance;

public interface AttendanceRepository extends JpaRepository<Attendance, Integer>{
	
	List<Attendance> findAllByEmployeeId(int employeeId);

}