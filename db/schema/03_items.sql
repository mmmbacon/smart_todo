DROP TABLE IF EXISTS items CASCADE;
CREATE TABLE items
(
  id           SERIAL PRIMARY KEY                                   NOT NULL,
  user_id      INTEGER REFERENCES users(id) ON DELETE CASCADE       NOT NULL,
  category_id  INTEGER REFERENCES categories(id) ON DELETE CASCADE  NOT NULL,
  description  VARCHAR(255)                                         NOT NULL,
  date_created TIMESTAMP                                            DEFAULT now(),
  date_due     TIMESTAMP,
  priority     SMALLINT,
  completed    BOOLEAN                                              NOT NULL DEFAULT FALSE
);
