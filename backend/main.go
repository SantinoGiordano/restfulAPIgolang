package main

import (
	"fmt"
	"net/http"
	
	"github.com/gin-gonic/gin"
)

type album struct {
	ID     string  `json:"id"`
	Title  string  `json:"title"`
	Artist string  `json:"artist"`
	Price  float64 `json:"price"`
}

var albums = []album{
	{ID: "1", Title: "Blue Train", Artist: "John Coltrane", Price: 56.99},
	{ID: "2", Title: "Jeru", Artist: "Gerry Mulligan", Price: 17.99},
	{ID: "3", Title: "Sarah Vaughan and Clifford Brown", Artist: "Sarah Vaughan", Price: 39.99},
}

func main() {
	gin.SetMode(gin.ReleaseMode)
	router := gin.Default()
	router.GET("/albums", getAlbums)
	router.GET("/albums/:id", getAlbumByID)
	// router.GET("/albums/title/:title", getAlbumByTitle)
	router.GET("/albums/title", getAlbumByTitle)
	router.POST("/albums", postAlbums)
	router.DELETE("/albums/remove/:id", deleteAlbums)

	router.Run("localhost:8080")
}

func getAlbums(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, albums)
}

func postAlbums(c *gin.Context) {
	var newAlbum album

	if err := c.BindJSON(&newAlbum); err != nil {
		return
	}

	albums = append(albums, newAlbum)
	c.IndentedJSON(http.StatusCreated, newAlbum)
}

func getAlbumByID(c *gin.Context) {
	id := c.Param("id")

	for _, a := range albums {
		if a.ID == id {
			c.IndentedJSON(http.StatusOK, a)
			return
		}
	}
	c.IndentedJSON(http.StatusNotFound, gin.H{"message": "album not found by id"})
}

func getAlbumByTitle(c *gin.Context) {
	// title := c.Param("title")
	title := c.Query("title")

	for _, a := range albums {
		if a.Title == title {
			c.IndentedJSON(http.StatusOK, a)
			return
		}
	}

	c.IndentedJSON(http.StatusNotFound, gin.H{"message": "album not found by name"})
}

func deleteAlbums(c *gin.Context) {
	id := c.Param("id")
	fmt.Println("Deleting album with ID:", id)
	fmt.Println("Albums:", albums) // Debugging

	for i, a := range albums {
		if a.ID == id {
			albums = append(albums[:i], albums[i+1:]...)
			fmt.Println("Album deleted:", a)
			c.IndentedJSON(http.StatusOK, gin.H{"message": "Album deleted", "album": a})
			return
		}
	}

	fmt.Println("Album not found with ID:", id)
	c.JSON(http.StatusNotFound, gin.H{"message": "Album not found"})
}