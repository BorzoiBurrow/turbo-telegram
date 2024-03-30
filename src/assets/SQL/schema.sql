-- to be removed before production
DROP DATABASE IF EXISTS UserData;

CREATE DATABASE UserData;

USE UserData;

CREATE TABLE IF NOT EXISTS Accounts(
UserID int AUTO_INCREMENT PRIMARY KEY,
UserName VARCHAR(64) NOT NULL,
Pass VARCHAR(128) NOT NULL,
administrator BOOLEAN DEFAULT 0
);

INSERT INTO Accounts (UserName, Pass)
VALUES ("TestUser", "ABC123");

