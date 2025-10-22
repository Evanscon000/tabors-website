package com.example.taborwebsite.storefront.entities;
import jakarta.persistence.*;
import lombok.*;

// Vocab: JPA = Java Persistence API. JPA is like the rules. Defines how Java objects map to DB tables
// Hibernate = Implementation (real code doing work) the actual library that maps and talks to DB

// @Entity marks this class as a JPA entity meaning it represents a table in DB
// Without @Entity Hibernate will not pick up class so no table is created or mapped
@Entity
// @Getter and @Setter Automatically generates the getters and setter methods for every field
@Getter
@Setter
// @Builder adds a builder pattern to our class (Lombok implementation)
// Builder allows you to assemble objects piece by piece w/o needing to call a large constructor with every field
@Builder
// @NoArgsConstructor generates a no argument constructor which is required by JPA
// Hibernate creates instances dynamically not using new direct so it needs to call an empty
// constructor to hydrate the obj from the DB
@NoArgsConstructor
// Generates a constructor with all fields as parameters
@AllArgsConstructor
// @Table defines which DB table this entity maps to the name = is the table name in DB
// Use @Table to customize table names or add unique constraints/indexes over default
@Table(name = "nails_for_sale")
public class NailsForSaleEntity {
    // @Id marks the primary key of this table every JPA entity has one @Id
    // Without an @Id JPA will throw an error when starting up since it needs unique identifier
    @Id
    // @GeneratedValue tells hibernate how to generate the @Id when inserting a new row
    // IDENTITY uses the database auto increment column (common with PostgreSQL)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
}