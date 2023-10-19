package com.crud.Crudop;

import jakarta.persistence.*;

@Entity
@Table(name="client")
public class Client {
    @Id
    @SequenceGenerator(name = "entity_id_sequence",sequenceName = "entity_id_sequence")
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator = "entity_id_sequence")
private Long id;

private String name;
private String email;

    public Client() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
