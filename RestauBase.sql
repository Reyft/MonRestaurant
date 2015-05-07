--
-- PostgreSQL database dump
--

-- Dumped from database version 9.4.1
-- Dumped by pg_dump version 9.4.1
-- Started on 2015-05-07 16:14:53

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;

--
-- TOC entry 179 (class 3079 OID 11855)
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- TOC entry 2044 (class 0 OID 0)
-- Dependencies: 179
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

--
-- TOC entry 542 (class 1247 OID 24605)
-- Name: courseType; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "courseType" AS ENUM (
    'Main',
    'Starter',
    'Dessert'
);


--
-- TOC entry 535 (class 1247 OID 24633)
-- Name: role; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE role AS ENUM (
    'boss',
    'cook',
    'waiter'
);


SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 173 (class 1259 OID 24595)
-- Name: courses; Type: TABLE; Schema: public; Owner: -; Tablespace: 
--

CREATE TABLE courses (
    id integer NOT NULL,
    name text,
    image text,
    price double precision,
    type "courseType"
);


--
-- TOC entry 172 (class 1259 OID 24593)
-- Name: Courses_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "Courses_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 2045 (class 0 OID 0)
-- Dependencies: 172
-- Name: Courses_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "Courses_id_seq" OWNED BY courses.id;


--
-- TOC entry 175 (class 1259 OID 24622)
-- Name: employees; Type: TABLE; Schema: public; Owner: -; Tablespace: 
--

CREATE TABLE employees (
    id integer NOT NULL,
    "firstName" text,
    "lastName" text,
    role role,
    "favPlate" integer
);


--
-- TOC entry 174 (class 1259 OID 24620)
-- Name: Employees_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "Employees_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 2046 (class 0 OID 0)
-- Dependencies: 174
-- Name: Employees_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "Employees_id_seq" OWNED BY employees.id;


--
-- TOC entry 178 (class 1259 OID 24660)
-- Name: Menu; Type: TABLE; Schema: public; Owner: -; Tablespace: 
--

CREATE TABLE "Menu" (
    id integer NOT NULL,
    name text,
    price double precision,
    starter integer,
    "mainDish" integer,
    dessert integer
);


--
-- TOC entry 177 (class 1259 OID 24658)
-- Name: Menu_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "Menu_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 2047 (class 0 OID 0)
-- Dependencies: 177
-- Name: Menu_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "Menu_id_seq" OWNED BY "Menu".id;


--
-- TOC entry 176 (class 1259 OID 24639)
-- Name: restaurant; Type: TABLE; Schema: public; Owner: -; Tablespace: 
--

CREATE TABLE restaurant (
    "Name" text NOT NULL,
    "Address" text NOT NULL,
    "Description" text,
    "Image" text
);


--
-- TOC entry 1909 (class 2604 OID 24663)
-- Name: id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "Menu" ALTER COLUMN id SET DEFAULT nextval('"Menu_id_seq"'::regclass);


--
-- TOC entry 1907 (class 2604 OID 24598)
-- Name: id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY courses ALTER COLUMN id SET DEFAULT nextval('"Courses_id_seq"'::regclass);


--
-- TOC entry 1908 (class 2604 OID 24625)
-- Name: id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY employees ALTER COLUMN id SET DEFAULT nextval('"Employees_id_seq"'::regclass);


--
-- TOC entry 2048 (class 0 OID 0)
-- Dependencies: 172
-- Name: Courses_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"Courses_id_seq"', 3, true);


--
-- TOC entry 2049 (class 0 OID 0)
-- Dependencies: 174
-- Name: Employees_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"Employees_id_seq"', 1, false);


--
-- TOC entry 2037 (class 0 OID 24660)
-- Dependencies: 178
-- Data for Name: Menu; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "Menu" (id, name, price, starter, "mainDish", dessert) FROM stdin;
\.


--
-- TOC entry 2050 (class 0 OID 0)
-- Dependencies: 177
-- Name: Menu_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"Menu_id_seq"', 1, false);


--
-- TOC entry 2032 (class 0 OID 24595)
-- Dependencies: 173
-- Data for Name: courses; Type: TABLE DATA; Schema: public; Owner: -
--

COPY courses (id, name, image, price, type) FROM stdin;
1	Garance Cookie	assets/images/garanceCookie.jpg	2.5	Dessert
2	Gratin à la crème	assets/images/gratin.jpg	12	Main
3	Salade	assets/images/salade.jpg	5.2000000000000002	Starter
\.


--
-- TOC entry 2034 (class 0 OID 24622)
-- Dependencies: 175
-- Data for Name: employees; Type: TABLE DATA; Schema: public; Owner: -
--

COPY employees (id, "firstName", "lastName", role, "favPlate") FROM stdin;
\.


--
-- TOC entry 2035 (class 0 OID 24639)
-- Dependencies: 176
-- Data for Name: restaurant; Type: TABLE DATA; Schema: public; Owner: -
--

COPY restaurant ("Name", "Address", "Description", "Image") FROM stdin;
Rémy et Garance	Antibes	Un super restaurant au coeur d'Antibes, qui vous accueille 6 jours sur 7, avec une armée de serveurs à votre écoute	assets/images/restoPic.jpg
\.


--
-- TOC entry 1911 (class 2606 OID 24603)
-- Name: primaryKeyCourse; Type: CONSTRAINT; Schema: public; Owner: -; Tablespace: 
--

ALTER TABLE ONLY courses
    ADD CONSTRAINT "primaryKeyCourse" PRIMARY KEY (id);


--
-- TOC entry 1913 (class 2606 OID 24630)
-- Name: primaryKeyEmployee; Type: CONSTRAINT; Schema: public; Owner: -; Tablespace: 
--

ALTER TABLE ONLY employees
    ADD CONSTRAINT "primaryKeyEmployee" PRIMARY KEY (id);


--
-- TOC entry 1917 (class 2606 OID 24668)
-- Name: primaryKeyMenu; Type: CONSTRAINT; Schema: public; Owner: -; Tablespace: 
--

ALTER TABLE ONLY "Menu"
    ADD CONSTRAINT "primaryKeyMenu" PRIMARY KEY (id);


--
-- TOC entry 1915 (class 2606 OID 24646)
-- Name: primaryKeyRestau; Type: CONSTRAINT; Schema: public; Owner: -; Tablespace: 
--

ALTER TABLE ONLY restaurant
    ADD CONSTRAINT "primaryKeyRestau" PRIMARY KEY ("Name", "Address");


--
-- TOC entry 1921 (class 2606 OID 24679)
-- Name: strangerDessert; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "Menu"
    ADD CONSTRAINT "strangerDessert" FOREIGN KEY (dessert) REFERENCES courses(id);


--
-- TOC entry 1920 (class 2606 OID 24674)
-- Name: strangerMain; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "Menu"
    ADD CONSTRAINT "strangerMain" FOREIGN KEY ("mainDish") REFERENCES courses(id);


--
-- TOC entry 1918 (class 2606 OID 24684)
-- Name: strangerPlate; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY employees
    ADD CONSTRAINT "strangerPlate" FOREIGN KEY ("favPlate") REFERENCES courses(id);


--
-- TOC entry 1919 (class 2606 OID 24669)
-- Name: strangerStarter; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "Menu"
    ADD CONSTRAINT "strangerStarter" FOREIGN KEY (starter) REFERENCES courses(id);


-- Completed on 2015-05-07 16:14:53

--
-- PostgreSQL database dump complete
--

