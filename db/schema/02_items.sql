DROP TABLE IF EXISTS items CASCADE;
CREATE TABLE items
(
  id           SERIAL PRIMARY KEY       NOT NULL,
  user_id      SERIAL                   NOT NULL,
  category_id  SERIAL                   NOT NULL,
  description  VARCHAR(255)             NOT NULL,
  date_created TIMESTAMP,
  date_due     TIMESTAMP,
  priority     SMALLINT,
  completed    BOOLEAN                  NOT NULL DEFAULT FALSE
);
