package com.pafproject.fithub;

import javax.sql.DataSource;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.jdbc.core.JdbcTemplate;

@SpringBootApplication
public class FithubApplication {

	public static void main(String[] args) {
		SpringApplication.run(FithubApplication.class, args);
	}

	@Bean
	public Runnable checkMySQLConnection(DataSource dataSource) {
		JdbcTemplate jdbcTemplate = new JdbcTemplate(dataSource);
		try {
			jdbcTemplate.queryForObject("SELECT 1", Integer.class);
			System.out.println("Connected to MySQL database successfully!");
		} catch (Exception e) {
			System.out.println("Failed to connect to MySQL database: " + e.getMessage());
		}
		return null;
	}

}

