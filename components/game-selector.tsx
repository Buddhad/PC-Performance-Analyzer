"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const games = [
  { id: "cyberpunk2077", name: "Cyberpunk 2077", image: "🎮" },
  { id: "gtav", name: "GTA V", image: "🚗" },
  { id: "valorant", name: "Valorant", image: "🎯" },
  { id: "fortnite", name: "Fortnite", image: "🏃" },
  { id: "elden-ring", name: "Elden Ring", image: "⚔️" },
  { id: "baldurs-gate", name: "Baldur's Gate 3", image: "🐉" },
]

export function GameSelector({ selectedGame, onSelectGame }) {
  return (
    <Card className="border-primary/20 bg-card/30">
      <CardHeader>
        <CardTitle>Select Game</CardTitle>
        <CardDescription>Choose a game to see FPS predictions</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        {games.map((game) => (
          <Button
            key={game.id}
            onClick={() => onSelectGame(game.id)}
            variant={selectedGame === game.id ? "default" : "outline"}
            className="w-full justify-start"
          >
            <span className="mr-2">{game.image}</span>
            {game.name}
          </Button>
        ))}
      </CardContent>
    </Card>
  )
}
