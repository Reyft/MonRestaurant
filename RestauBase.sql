--
-- PostgreSQL database dump
--

-- Dumped from database version 9.4.1
-- Dumped by pg_dump version 9.4.1
-- Started on 2015-05-07 15:41:43

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;

--
-- TOC entry 2003 (class 1262 OID 16393)
-- Name: restaurant; Type: DATABASE; Schema: -; Owner: -
--

CREATE DATABASE restaurant WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'French_France.1252' LC_CTYPE = 'French_France.1252';


\connect restaurant

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;

--
-- TOC entry 174 (class 3079 OID 11855)
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- TOC entry 2006 (class 0 OID 0)
-- Dependencies: 174
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

--
-- TOC entry 531 (class 1247 OID 24605)
-- Name: CourseType; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "CourseType" AS ENUM (
    'Main',
    'Starter',
    'Dessert'
);


SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 173 (class 1259 OID 24595)
-- Name: Courses; Type: TABLE; Schema: public; Owner: -; Tablespace: 
--

CREATE TABLE "Courses" (
    id integer NOT NULL,
    name text,
    image text,
    price double precision,
    type "CourseType"
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
-- TOC entry 2007 (class 0 OID 0)
-- Dependencies: 172
-- Name: Courses_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "Courses_id_seq" OWNED BY "Courses".id;


--
-- TOC entry 1885 (class 2604 OID 24598)
-- Name: id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "Courses" ALTER COLUMN id SET DEFAULT nextval('"Courses_id_seq"'::regclass);


--
-- TOC entry 1998 (class 0 OID 24595)
-- Dependencies: 173
-- Data for Name: Courses; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "Courses" (id, name, image, price, type) FROM stdin;
1	Garance Cookie	assets/images/garanceCookie.jpg	2.5	Dessert
2	Gratin à la crème	assets/images/gratin.jpg	12	Main
3	Salade	assets/images/salade.jpg	5.2000000000000002	Starter
\.


--
-- TOC entry 2008 (class 0 OID 0)
-- Dependencies: 172
-- Name: Courses_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"Courses_id_seq"', 3, true);


--
-- TOC entry 1887 (class 2606 OID 24603)
-- Name: primaryKey; Type: CONSTRAINT; Schema: public; Owner: -; Tablespace: 
--

ALTER TABLE ONLY "Courses"
    ADD CONSTRAINT "primaryKey" PRIMARY KEY (id);


--
-- TOC entry 2005 (class 0 OID 0)
-- Dependencies: 5
-- Name: public; Type: ACL; Schema: -; Owner: -
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM remy;
GRANT ALL ON SCHEMA public TO remy;
GRANT ALL ON SCHEMA public TO PUBLIC;


-- Completed on 2015-05-07 15:41:43

--
-- PostgreSQL database dump complete
--

