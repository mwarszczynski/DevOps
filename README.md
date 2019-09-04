# DevOps Projects

## Main project 1
A project i invented, which i am gradually developing step by step (picture below).

![Own_big_project](https://user-images.githubusercontent.com/23153433/64229533-4eba1d80-ceea-11e9-919a-7ca654387296.jpg)

## Main project 2
Stworzenie architektury dla naszej aplikacji utworzonej w ramach przedmiotu przetwarzanie równoległe;
Architektura prosta z wykorzystaniem wielu popularnych obecnie serwisów;
Stworzenie klastra bazy danych;
Stworzenie klastra Redis;
Stworzenie klastra RabbitMQ;
Przekierowanie nagłówków w HAPROXY;
NGINX dla naszej aplikacji.


## Exercices

**Exercise_1**
https://mgruszczynski.pl/cdv/docker.html?fbclid=IwAR1UWQCI2B3KWj2znsdbsAEiCX1FIlBU6mGpEg82s6EzDMGvvdRnSiB2pQ0

**Exercise_2** - Nazwa zadania: Deployment nowego środowiska testowego
Opis zadania: Przygotuj proszę dla nas lokalne środowisko z wykorzystaniem docker-compose, posiadające następujące serwisy:
Serwer NGINX z php-fpm dostępny za pomocą portu 9080 oraz domeną app.localhost;
Bazę mysql 5.7 z podstawową konfiguracją oraz hasłem root: KrolKarolK0ral3;
Kontener z php-myadmin w celu wglądu do bazy danych;
Wolumen /var/lib/mysql ma być osobnym fs stworzonym w LVM;
Baza danych musi być w sieci secure;
Kontener dla frontendu z NodeJS;  

![devOps_project2](https://user-images.githubusercontent.com/23153433/64229061-02baa900-cee9-11e9-8c54-02e977bcb01b.jpg)

**Exercise_3** - Stwórz plik docker-compose.yml, który:
budować będzie obraz NGINX z Dockerfile;
NGINX wystawi dwa serwisy www:
api.mojadomena.com -> skonfigurować zgodnie z uWSGI;
mojadomena.com -> zwracać będzie plik index.html;
Volumeny dla serwisów mają być dostępne z poziomu hosta;
api.mojadomena.com wystawiona na porcie 9876;
Dla chętnych -> skonfigurować SSL - certyfikat self-signed wystarczy :)
									-------------- ZDJECIE W WORDZIE ---------------

**Exercise_4** - Utworzyć plik docker-compose, który zbuduje klaster (3) NoSQL scyllaDB:
•	udostępniony zostanie wolumen dla danych - /var/lib/scylla/data
•	sprawdzany będzie healthcheck czy dany węzeł działa poprawnie;
•	przygotowany będzie plik load_data.cql, który utworzy następujące keyspace przy starcie klastra: photos, company;
•	Keyspace company zawierać ma dwie tabele: employees oraz products i wypełniona zostanie przykładowymi danymi maks po 5 rekordów;
Dla chętnych: postawić do klastra scylla manager’a do monitorowania wydajności klastra i udostępnić serwis na porcie 80 dla localhosta (https://docs.scylladb.com/operating-scylla/manager/1.3/run-in-docker/)


*An outline of my skills*
![Skills_RoadMap](https://user-images.githubusercontent.com/23153433/64229621-8fb23200-ceea-11e9-9752-fe3c11fad893.JPG)

