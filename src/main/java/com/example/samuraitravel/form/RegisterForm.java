package com.example.samuraitravel.form;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RegisterForm {
	
	private Integer houseId;
	
	private Integer userId;
	
	private Integer score;
	
	private String review;

}