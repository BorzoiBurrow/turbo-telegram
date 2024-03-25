-- to be removed before production
DROP DATABASE IF EXISTS UserData;

CREATE DATABASE UserData;

USE UserData;

CREATE TABLE IF NOT EXISTS Accounts(
UserName VARCHAR(64) NOT NULL,
Email VARCHAR(128) NOT NULL,
Pass VARCHAR(128) NOT NULL,
administrator BOOLEAN DEFAULT 0
);

