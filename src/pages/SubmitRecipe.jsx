import { useState } from "react";
import { Container, Heading, VStack, FormControl, FormLabel, Input, Textarea, Button, useToast, Box, Text } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

const SubmitRecipe = () => {
  const [recipeName, setRecipeName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [rating, setRating] = useState(0);
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission, e.g., send the data to a server
    console.log("Recipe submitted:", { recipeName, ingredients, instructions, rating });
    toast({
      title: "Recipe submitted.",
      description: "Your recipe has been submitted successfully.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    setRecipeName("");
    setIngredients("");
    setInstructions("");
    setRating(0);
  };

  const handleRating = (rate) => {
    setRating(rate);
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4} as="form" onSubmit={handleSubmit}>
        <Heading as="h1" size="xl">Submit Your Recipe</Heading>
        <FormControl id="recipe-name" isRequired>
          <FormLabel>Recipe Name</FormLabel>
          <Input
            value={recipeName}
            onChange={(e) => setRecipeName(e.target.value)}
            placeholder="Enter the recipe name"
          />
        </FormControl>
        <FormControl id="ingredients" isRequired>
          <FormLabel>Ingredients</FormLabel>
          <Textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="Enter the ingredients"
          />
        </FormControl>
        <FormControl id="instructions" isRequired>
          <FormLabel>Instructions</FormLabel>
          <Textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            placeholder="Enter the instructions"
          />
        </FormControl>
        <FormControl id="rating" isRequired>
          <FormLabel>Rating</FormLabel>
          <Box display="flex" alignItems="center">
            {[1, 2, 3, 4, 5].map((star) => (
              <StarIcon
                key={star}
                boxSize={6}
                color={star <= rating ? "teal.500" : "gray.300"}
                onClick={() => handleRating(star)}
                cursor="pointer"
              />
            ))}
          </Box>
          <Text>{rating} out of 5</Text>
        </FormControl>
        <Button type="submit" colorScheme="teal" size="lg">Submit Recipe</Button>
      </VStack>
    </Container>
  );
};

export default SubmitRecipe;