PGDMP          :                s        
   restaurant    9.4.1    9.4.1     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                       false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                       false            �           1262    16393 
   restaurant    DATABASE     �   CREATE DATABASE restaurant WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'French_France.1252' LC_CTYPE = 'French_France.1252';
    DROP DATABASE restaurant;
             postgres    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
             postgres    false            �           0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                  postgres    false    5            �            3079    11855    plpgsql 	   EXTENSION     ?   CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;
    DROP EXTENSION plpgsql;
                  false            �           0    0    EXTENSION plpgsql    COMMENT     @   COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';
                       false    177                       1247    24605 
   CourseType    TYPE     O   CREATE TYPE "CourseType" AS ENUM (
    'Main',
    'Starter',
    'Dessert'
);
    DROP TYPE public."CourseType";
       public       postgres    false    5                       1247    24633    role    TYPE     C   CREATE TYPE role AS ENUM (
    'boss',
    'cook',
    'waiter'
);
    DROP TYPE public.role;
       public       postgres    false    5            �            1259    24595    Courses    TABLE     �   CREATE TABLE "Courses" (
    id integer NOT NULL,
    name text,
    image text,
    price double precision,
    type "CourseType"
);
    DROP TABLE public."Courses";
       public         postgres    false    534    5            �            1259    24593    Courses_id_seq    SEQUENCE     r   CREATE SEQUENCE "Courses_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public."Courses_id_seq";
       public       postgres    false    5    173            �           0    0    Courses_id_seq    SEQUENCE OWNED BY     7   ALTER SEQUENCE "Courses_id_seq" OWNED BY "Courses".id;
            public       postgres    false    172            �            1259    24622 	   Employees    TABLE     p   CREATE TABLE "Employees" (
    id integer NOT NULL,
    "firstName" text,
    "lastName" text,
    role role
);
    DROP TABLE public."Employees";
       public         postgres    false    542    5            �            1259    24620    Employees_id_seq    SEQUENCE     t   CREATE SEQUENCE "Employees_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public."Employees_id_seq";
       public       postgres    false    175    5            �           0    0    Employees_id_seq    SEQUENCE OWNED BY     ;   ALTER SEQUENCE "Employees_id_seq" OWNED BY "Employees".id;
            public       postgres    false    174            �            1259    24639 
   Restaurant    TABLE        CREATE TABLE "Restaurant" (
    "Name" text NOT NULL,
    "Address" text NOT NULL,
    "Description" text,
    "Image" text
);
     DROP TABLE public."Restaurant";
       public         postgres    false    5            l           2604    24598    id    DEFAULT     ^   ALTER TABLE ONLY "Courses" ALTER COLUMN id SET DEFAULT nextval('"Courses_id_seq"'::regclass);
 ;   ALTER TABLE public."Courses" ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    172    173    173            m           2604    24625    id    DEFAULT     b   ALTER TABLE ONLY "Employees" ALTER COLUMN id SET DEFAULT nextval('"Employees_id_seq"'::regclass);
 =   ALTER TABLE public."Employees" ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    174    175    175            �          0    24595    Courses 
   TABLE DATA               :   COPY "Courses" (id, name, image, price, type) FROM stdin;
    public       postgres    false    173   �       �           0    0    Courses_id_seq    SEQUENCE SET     7   SELECT pg_catalog.setval('"Courses_id_seq"', 3, true);
            public       postgres    false    172            �          0    24622 	   Employees 
   TABLE DATA               A   COPY "Employees" (id, "firstName", "lastName", role) FROM stdin;
    public       postgres    false    175   )       �           0    0    Employees_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('"Employees_id_seq"', 1, false);
            public       postgres    false    174            �          0    24639 
   Restaurant 
   TABLE DATA               J   COPY "Restaurant" ("Name", "Address", "Description", "Image") FROM stdin;
    public       postgres    false    176   F       o           2606    24603    primaryKeyCourse 
   CONSTRAINT     S   ALTER TABLE ONLY "Courses"
    ADD CONSTRAINT "primaryKeyCourse" PRIMARY KEY (id);
 F   ALTER TABLE ONLY public."Courses" DROP CONSTRAINT "primaryKeyCourse";
       public         postgres    false    173    173            q           2606    24630    primaryKeyEmployee 
   CONSTRAINT     W   ALTER TABLE ONLY "Employees"
    ADD CONSTRAINT "primaryKeyEmployee" PRIMARY KEY (id);
 J   ALTER TABLE ONLY public."Employees" DROP CONSTRAINT "primaryKeyEmployee";
       public         postgres    false    175    175            s           2606    24646    primaryKeyRestau 
   CONSTRAINT     e   ALTER TABLE ONLY "Restaurant"
    ADD CONSTRAINT "primaryKeyRestau" PRIMARY KEY ("Name", "Address");
 I   ALTER TABLE ONLY public."Restaurant" DROP CONSTRAINT "primaryKeyRestau";
       public         postgres    false    176    176    176            �      x�e�1�@k���1�@JE���
�� � �J�?�1Х�ܙ�zV.��Ӳ<� ��[�gNbM�������bg�H�H�+{.a[��a��5�=T�N[��Gx�ۯi��f����Y]�߃r;�      �      x������ � �      �   �   x�-���@k����촶�5&v6��B� ���$��-���	���d��2|�������e��E+#�'*���7�!������*�=bNn������j[�8W��>�úaԙ��~�8+�.!yf!f�v������N��nj�g]���@�     